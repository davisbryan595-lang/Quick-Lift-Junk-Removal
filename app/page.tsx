"use client"

import HomeClient from "@/components/home-client"

export const revalidate = 3600

export default function Page() {
  return <HomeClient />
}
