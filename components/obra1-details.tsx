"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function Obra1Details() {
  const [formData, setFormData] = useState({
    presupuesto: "1.000.000 ARS",
    inicioObra: "2024-01-01",
    finObra: "2024-12-31",
    descripcion: "Reconstrucción del sistema de alcantarillado de la calle Catamarca"
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the updated data to a server
    console.log("Updated form data:", formData)
    // You can add logic here to save the data or show a success message
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
          <Button type="submit">Save Changes</Button>
        </form>
      </CardContent>
    </Card>
  )
}