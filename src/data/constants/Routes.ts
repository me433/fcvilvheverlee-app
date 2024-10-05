type Route = {name: string, href: string}

export const ClubRoutes: Route[] = [
    {name: "Nieuws", href: "/"}, 
    {name: "Bestuur", href: "bestuur"},
    {name: "Club-API", href: "api"},
    {name: "Locatie", href: "contact"},
    {name: "Historiek", href: "historiek"},
    {name: "Sponsors", href: "sponsors"}
]

export const StatisticsRoutes: Route[] = [
    {name: "Statistieken seizoen", href: "stats-season"},
    {name: "Statistieken sinds 2002", href: "stats-historical"}
]

export const MemberRoutes: Route[] = [
    {name: "Inschrijven", href: "availabilities"}
    
]

export const AdminRoutes: Route[] = [
    {name: "Admin", href: "admin"}
]