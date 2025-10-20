'use client'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Building2, User } from "lucide-react"

export interface Client {
    id: string
    name: string
    email: string
    company: string
    onClick?: () => void
}

export default function ClientCard({ name, email, company, onClick }: Client) {
    return (
        <button className="w-[95%]" onClick={onClick}>
            <Card>
                <CardHeader className="flex flex-col">
                    <div className="flex gap-2 items-center">
                        <User />
                        <CardTitle>{name}</CardTitle>
                    </div>
                    <CardDescription>{email}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex gap-2 items-center">
                        <Building2 />
                        <p>{company}</p>
                    </div>
                </CardContent>
            </Card>
        </button>
    )
}