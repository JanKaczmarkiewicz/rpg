export type CharacterLibraryProps<T> = {
    characters: T[];
    selectedCharacterId?: string;
    onSelect: (character: T) => void;
    getCharacterCardDetails: (character: T) => CharacterCardDetails;
};

export type CharacterCardDetails = {
    id: string;
    imageUrl: string;
    primaryDescription: string;
    secondaryDescription: string;
};

export type CharacterCardProps<T> = {
    characterDetails: T;
    selected?: boolean;
    onClick: (characterDetails: T) => void;
};
