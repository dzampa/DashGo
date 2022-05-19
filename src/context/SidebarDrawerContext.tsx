import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDowerContextProps {
    children: ReactNode;
}

type SidebarDowerContextData = UseDisclosureReturn;

const SidebarDowerContext = createContext({} as SidebarDowerContextData);

export function SidebarDrawerProvider({ children }: SidebarDowerContextProps) {
    const disclosure = useDisclosure();
    const router = useRouter();

    useEffect(() => {
        disclosure.onClose()
    }, [router.asPath])

    return (
        <SidebarDowerContext.Provider value={disclosure}>
            {children}
        </SidebarDowerContext.Provider >
    )
}

export const useSidebarDrawer = () => useContext(SidebarDowerContext)