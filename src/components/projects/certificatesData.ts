export interface Certificate {
  id: number
  title: string
  issuer: string
  date: string
  image: string
  credentialId?: string
  link?: string
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Problem Solving (Basic) Certificate",
    issuer: "HackerRank",
    date: "2024",
    image: "/certi_problem_soving_basic_hackerrank.png",
    link: "https://www.hackerrank.com/certificates/e990c0beab8b", // mock or actual link if known
  },
  {
    id: 2,
    title: "Google Play Store Listing Certificate",
    issuer: "Google Play Console",
    date: "2024",
    image: "/certi_google_play_listing.png",
  },
  {
    id: 3,
    title: "Winner of Genera-Z Berbakti",
    issuer: "BAKTI CA (Kemenkominfo)",
    date: "2025",
    image: "/certi_winner_generaz.png",
  },
  {
    id: 4,
    title: "Backend Developer in WebdevXML",
    issuer: "UNITY UNSRAT",
    date: "2024",
    image: "/certi_backenddev_webdevxml.jpeg",
  }
]
