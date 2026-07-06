import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { destinations } from "@/data/content"
import DestinationClient from "./DestinationClient"

export function generateStaticParams() {
  return destinations.map((d) => ({ id: d.id }))
}

export function generateMetadata({ params }: { params: Promise<{ id: string }> }): Metadata {
  const { id } = params as unknown as { id: string }
  const dest = destinations.find((d) => d.id === id)
  if (!dest) return { title: "Not Found" }
  return {
    title: `${dest.name} | 대한구석 여행 가이드`,
    description: dest.description,
    openGraph: {
      title: `${dest.name} - ${dest.nameEn}`,
      description: dest.description,
      images: [{ url: dest.image }],
    },
  }
}

export default function DestinationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = params as unknown as { id: string }
  const dest = destinations.find((d) => d.id === id)
  if (!dest) notFound()
  return <DestinationClient dest={dest} />
}
