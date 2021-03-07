import Enemy from '../models/Enemy/Enemy';

const data = [
    {
        name: 'Pełzacz zwyczajny',
        imageUrl: 'http://emargo.pl/margonem/obrazki/npc/zwi/pelzacz_zwycz1.gif',
        description: 'lorem ipsum',
        level: 21,
    },
    {
        name: 'Gaunt',
        imageUrl: 'http://emargo.pl/margonem/obrazki/npc/pot/gaunt2.gif',
        description: 'lorem ipsum',
        level: 21,
    },
    {
        name: 'Niedźwiedź brunatny',
        imageUrl: 'http://emargo.pl/margonem/obrazki/npc/zwi/mis_brunatny1.gif',
        description: 'lorem ipsum',
        level: 21,
    },
    {
        name: 'Mrówcza Królowa',
        imageUrl: 'http://emargo.pl/margonem/obrazki/npc/zwi/mrowka-kro01a.gif',
        description: 'lorem ipsum',
        level: 21,
    },
    {
        name: 'Chorobnik',
        imageUrl: 'http://emargo.pl/margonem/obrazki/npc/pot/blady1.gif',
        description: 'lorem ipsum',
        level: 21,
    },
    {
        name: 'Czerw',
        imageUrl: 'http://emargo.pl/margonem/obrazki/npc/bur/old-czerw.gif',
        description: 'lorem ipsum',
        level: 21,
    },
    {
        name: 'Domina Ecclesiae',
        imageUrl: 'http://emargo.pl/margonem/obrazki/npc/pot/domina.gif',
        description: 'lorem ipsum',
        level: 21,
    },
    {
        name: 'Trujący pająk',
        imageUrl: 'http://emargo.pl/margonem/obrazki/npc/zwi/pajak_trujacy1.gif',
        description: 'lorem ipsum',
        level: 22,
    },
    {
        name: 'Prztykacz eleancki',
        imageUrl: 'http://emargo.pl/margonem/obrazki/npc/hum/dz-dzie-heros.gif',
        description: 'lorem ipsum',
        level: 22,
    },
    {
        name: 'Astratus',
        imageUrl: 'http://emargo.pl/margonem/obrazki/npc/pot/szkielet6.gif',
        description: 'lorem ipsum',
        level: 22,
    },
    {
        name: 'Niedźwiedź szary',
        imageUrl: 'http://emargo.pl/margonem/obrazki/npc/zwi/mis_szary1.gif',
        description: 'lorem ipsum',
        level: 22,
    },
    {
        name: 'Pomniejszy demon',
        imageUrl: 'http://emargo.pl/margonem/obrazki/npc/pot/demon1.gif',
        description: 'lorem ipsum',
        level: 22,
    },
    {
        name: 'Brązowa mrówka robotnica',
        imageUrl: 'http://emargo.pl/margonem/obrazki/npc/zwi/mrowka12a.gif',
        description: 'lorem ipsum',
        level: 22,
    },
    {
        name: 'Wir wodny',
        imageUrl: 'http://emargo.pl/margonem/obrazki/npc/pot/wir1.gif',
        description: 'lorem ipsum',
        level: 23,
    },
    {
        name: 'Bandyta',
        imageUrl: 'http://emargo.pl/margonem/obrazki/npc/mez/npc93.gif',
        description: 'lorem ipsum',
        level: 23,
    },
    {
        name: 'Wąż rzeczny',
        imageUrl: 'http://emargo.pl/margonem/obrazki/npc/zwi/wonsz-zwykly2.gif',
        description: 'lorem ipsum',
        level: 23,
    },
    {
        name: 'Niedźwiedź czarny',
        imageUrl: 'http://emargo.pl/margonem/obrazki/npc/zwi/mis_czarny1.gif',
        description: 'lorem ipsum',
        level: 23,
    },
    {
        name: 'Tajniak Kowalski',
        imageUrl: 'http://emargo.pl/margonem/obrazki/npc/mez/agent-szmit.gif',
        description: 'lorem ipsum',
        level: 23,
    },
    {
        name: 'Brązowa mrówka żołnierz',
        imageUrl: 'http://emargo.pl/margonem/obrazki/npc/zwi/mrowka05a.gif',
        description: 'lorem ipsum',
        level: 23,
    },
    {
        name: 'Brązowa mrówka tragarz',
        imageUrl: 'http://emargo.pl/margonem/obrazki/npc/zwi/mrowka16a.gif',
        description: 'lorem ipsum',
        level: 23,
    },
];

export const run = async () => {
    for (const enemy of data) {
        await new Enemy(enemy).save();
    }
};
