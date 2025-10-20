'use client'

import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput
} from "@/components/ui/input-group"
import { SearchIcon } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
    onSearch: (value: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
    const [search, setSearch] = useState<string>('')

    const handleSearch = () => {
        onSearch(search)
    }

    return (
        <div>
            <InputGroup>
                <InputGroupInput value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Busca..." />
                <InputGroupAddon>
                    <SearchIcon />
                </InputGroupAddon>
                <InputGroupAddon align="inline-end">
                    <InputGroupButton onClick={handleSearch}>Buscar</InputGroupButton>
                </InputGroupAddon>
            </InputGroup>
        </div>
    )
}