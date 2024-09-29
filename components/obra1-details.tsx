'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function Obra1Details() {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Obra 1 Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="presupuesto">Presupuesto</Label>
          <Input id="presupuesto" value="1.000.000 ARS" readOnly />
        </div>
        <div className="space-y-2">
          <Label htmlFor="inicio-obra">Inicio Obra</Label>
          <Input id="inicio-obra" type="date" value="2024-01-01" readOnly />
        </div>
        <div className="space-y-2">
          <Label htmlFor="fin-obra">Fin Obra</Label>
          <Input id="fin-obra" type="date" value="2024-12-31" readOnly />
        </div>
        <div className="space-y-2">
          <Label htmlFor="descripcion">Descripción</Label>
          <Textarea 
            id="descripcion" 
            readOnly 
            value="Reconstrucción del sistema de alcantarillado de la calle Catamarca"
            className="h-24"
          />
        </div>
      </CardContent>
    </Card>
  )
}