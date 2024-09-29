"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

type YourDataType = { // Define the structure of your data
  name: string;
  value: string;
  // Add other properties as needed
};

export function Obra1Details() {
  const [formData, setFormData] = useState(() => {
    // Load initial state from localStorage
    const savedData = localStorage.getItem("obra1Details")
    return savedData ? JSON.parse(savedData) : {
      presupuesto: "1.000.000 ARS",
      inicioObra: "2024-01-01",
      finObra: "2024-12-31",
      descripcion: "Reconstrucción del sistema de alcantarillado de la calle Catamarca"
    }
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData: YourDataType) => ({
      ...prevData,
      [name]: value
    }))
  }

  useEffect(() => {
    // Save formData to localStorage whenever it changes
    localStorage.setItem("obra1Details", JSON.stringify(formData))
    console.log("Autosaved form data:", formData)
  }, [formData]) // Trigger on formData change

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Updated form data:", formData)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Obra 1 Details</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="presupuesto">Presupuesto</Label>
            <Input
              id="presupuesto"
              name="presupuesto"
              value={formData.presupuesto}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="inicio-obra">Inicio Obra</Label>
            <Input
              id="inicio-obra"
              name="inicioObra"
              type="date"
              value={formData.inicioObra}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fin-obra">Fin Obra</Label>
            <Input
              id="fin-obra"
              name="finObra"
              type="date"
              value={formData.finObra}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="descripcion">Descripción</Label>
            <Textarea 
              id="descripcion"
              name="descripcion"
              value={formData.descripcion}
              onChange={handleInputChange}
              className="h-24"
            />
          </div>
        </form>
      </CardContent>
    </Card>
  )
}