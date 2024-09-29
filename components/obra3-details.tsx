'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { Button } from "@/components/ui/button"// {{ edit_1 }}

export function Obra3Details() {
  const [formData, setFormData] = useState(() => {
    // Load data from localStorage if available
    const savedData = localStorage.getItem('obra3FormData')
    return savedData ? JSON.parse(savedData) : {
      presupuesto: "3.000.000 ARS",
      inicioObra: "2024-01-01",
      finObra: "2024-12-31",
      descripcion: "Reconstrucción del sistema de alcantarillado de la calle Catamarca"
    }
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const updatedData = {
      ...formData,
      [name]: value
    }
    setFormData(updatedData)
    // Save updated data to localStorage
    localStorage.setItem('obra3FormData', JSON.stringify(updatedData))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Updated form data:", formData)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Obra 3 - detalles</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
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
          {/* <Button type="submit">Save Changes</Button> */}
        </form>
      </CardContent>
    </Card>
  )
}