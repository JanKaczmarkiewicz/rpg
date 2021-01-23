export type CharacterLibraryProps = {
    characters: CharacterDefinition[];
    selectedCharacterId?: string;
    onSelect: (characterDefinition: CharacterDefinition) => void;
};

export type CharacterDefinition = {
    imageUrl: string;
    id: string;
    primaryDescription: string;
    secondaryDescription: string;
};

export type CharacterCardProps = {
    characterDefinition: CharacterDefinition;
    selected?: boolean;
    onClick: (characterDefinition: CharacterDefinition) => void;
};
