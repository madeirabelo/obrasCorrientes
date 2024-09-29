"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Obra1Details } from "./obra1-details"
import { Obra2Details } from "./obra2-details"
import { Obra3Details } from "./obra3-details"

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
  const [statusData, setStatusData] = useState<StatusData[]>(initialData)
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [selectedMenuItem, setSelectedMenuItem] = useState<string | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleCardClick = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const handleMenuItemClick = (item: string) => {
    setSelectedMenuItem(item)
    setIsMenuOpen(false)
  }

  const renderContent = () => {
    if (!selectedMenuItem) {
      return (
        <div className="flex justify-center items-center h-64">
          <h2 className="text-3xl font-bold">Ministerio</h2>
        </div>
      )
    }

    if (selectedMenuItem === "Dashboard") {
      return (
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
      )
    }

    if (selectedMenuItem === "Obra 1") {
      return <Obra1Details />
    }

    if (selectedMenuItem === "Obra 2") {
      return <Obra2Details />
    }

    if (selectedMenuItem === "Obra 3") {
      return <Obra3Details />
    }

    return (
      <div className="flex justify-center items-center h-64">
        <h2 className="text-3xl font-bold">{selectedMenuItem}</h2>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">System Dashboard</h1>
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                Navigate through different sections of the application.
              </SheetDescription>
            </SheetHeader>
            <div className="mt-4 space-y-2">
              <Button variant="ghost" className="w-full justify-start" onClick={() => handleMenuItemClick("Dashboard")}>Dashboard</Button>
              <Button variant="ghost" className="w-full justify-start" onClick={() => handleMenuItemClick("Obra 1")}>Obra 1</Button>
              <Button variant="ghost" className="w-full justify-start" onClick={() => handleMenuItemClick("Obra 2")}>Obra 2</Button>
              <Button variant="ghost" className="w-full justify-start" onClick={() => handleMenuItemClick("Obra 3")}>Obra 3</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      {renderContent()}
    </div>
  )
}