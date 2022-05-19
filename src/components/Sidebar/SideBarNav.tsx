import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SideBarNav() {
    return (
        <Stack spacing="12" align="flex-start">
            <NavSection title="Geral">
                <NavLink icon={RiDashboardLine}>DashBoard</NavLink>
                <NavLink icon={RiContactsLine}>Usuários</NavLink>
            </NavSection>
            <NavSection title="ATOMAÇÃO">
                <NavLink icon={RiInputMethodLine}>Formulário</NavLink>
                <NavLink icon={RiGitMergeLine}>Automação</NavLink>
            </NavSection>
        </Stack >
    )
}