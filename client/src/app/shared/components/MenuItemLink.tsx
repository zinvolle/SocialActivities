import { MenuItem } from "@mui/material";
import type { ReactNode } from "react";
import { NavLink } from "react-router";

export default function MenuItemLink({ children, to }: { children: ReactNode, to: string }) {
    return (
        <MenuItem component={NavLink} to={to} sx={{
            fontSize: '1.1rem',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            letterSpacing: 1,
            borderRadius: 2,
            color: 'inherit',
            '&.active': {
                color: '#E9BCB7'
            }
        }}>
            {children}
        </MenuItem>
    )
}