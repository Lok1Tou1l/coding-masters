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
<<<<<<< HEAD
    
  );
=======
    <Tabs defaultValue="account" className="w-[400px] mx-auto">
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
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
          <CardFooter>
            <Button>Sign in</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
>>>>>>> 66a076fad7082d182ade81bb37a21df43a1d7492
}
