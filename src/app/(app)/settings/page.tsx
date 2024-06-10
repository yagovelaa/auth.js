import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { FormSettings } from './form'

export default function SettingsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Settings</CardTitle>
        <CardDescription>User Settings</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <FormSettings />
      </CardContent>
    </Card>
  )
}
