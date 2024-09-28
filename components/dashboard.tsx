"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle } from "lucide-react"

interface StatusData {
  id: number
  title: string
  description: string
  status: "ok" | "problem"
  details: string
}

const initialData: StatusData[] = [
  {
    id: 1,
    title: "Server Status",
    description: "Main server health",
    status: "ok",
    details: "All systems are running smoothly."
  },
  {
    id: 2,
    title: "Database",
    description: "Database connectivity",
    status: "problem",
    details: "High latency detected in database queries."
  },
  {
    id: 3,
    title: "API",
    description: "API response time",
    status: "ok",
    details: "API is responding within acceptable time limits."
  },
  {
    id: 4,
    title: "User Authentication",
    description: "Login system status",
    status: "ok",
    details: "User authentication system is functioning normally."
  }
]

export function DashboardComponent() {
  const [statusData] = useState<StatusData[]>(initialData)
  //const [setStatusData] = useState<StatusData[]>(initialData)
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const handleCardClick = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">System Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {statusData.map((item) => (
          <Card 
            key={item.id} 
            className={`cursor-pointer transition-all duration-300 ${
              item.status === "problem" ? "border-red-500" : "border-green-500"
            }`}
            onClick={() => handleCardClick(item.id)}
          >
            <CardHeader>
              <CardTitle className="flex items-center">
                {item.status === "problem" ? (
                  <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                ) : (
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                )}
                {item.title}
              </CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              {expandedId === item.id && (
                <p className="text-sm mt-2">{item.details}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}