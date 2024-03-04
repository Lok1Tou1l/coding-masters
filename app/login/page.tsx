import React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px] mx-auto">
      <TabsContent value="account">
        <Card className="bg-green-200">
          <CardHeader className="bg-green-500">
            <CardTitle className="text-white">Account</CardTitle>
            <CardDescription className="text-white">
              Login to your account and start using our services
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Matricule Uni</Label>
              <Input id="matricule" defaultValue="matricule universitaire" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Password</Label>
              <Input id="password" defaultValue="password" />
            </div>
          </CardContent>
          <CardFooter className="bg-green-500">
            <Button className="bg-green-700 text-white">Sign in</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
