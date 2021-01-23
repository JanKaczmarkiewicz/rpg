import { CharacterDefinition } from './types';

const produceCharacterName = (url: string): string => url.split('/').slice(-1)[0].split('.')[0];

export const characters: CharacterDefinition[] = [
    'https://www.margonem.pl/obrazki/npc/pot/st-puma.gif',
    'https://www.margonem.pl/obrazki/npc/pot/demonszef.gif',
    'https://www.margonem.pl/obrazki/npc/hum/gobmag2.gif',
    'https://www.margonem.pl/obrazki/npc/hum/gobsamurai.gif',
    'https://www.margonem.pl/obrazki/npc/hum/razuglag.gif',
    'https://www.margonem.pl/obrazki/npc/woj/rozb04.gif',
    'https://www.margonem.pl/obrazki/npc/hum/klan_tarmus.gif',
    'https://www.margonem.pl/obrazki/npc/e2/glut_agar.gif',
    'https://www.margonem.pl/obrazki/npc/hum/kobold07.gif',
    'https://www.margonem.pl/obrazki/npc/pot/dzik.gif',
    'https://www.margonem.pl/obrazki/npc/hum/gnoll11.gif',
    'https://www.margonem.pl/obrazki/npc/hum/gnoll12.gif',
    'https://www.margonem.pl/obrazki/npc/hum/tollok-c-boss.gif',
    'https://www.margonem.pl/obrazki/npc/hum/tollok-c-boss.gif',
    'https://www.margonem.pl/obrazki/npc/hum/goplana.gif',
    'https://www.margonem.pl/obrazki/npc/hum/dlawiciel5.gif',
    'https://www.margonem.pl/obrazki/npc/hum/mnich04.gif',
    'https://www.margonem.pl/obrazki/npc/hum/wodnik03.gif',
    'https://www.margonem.pl/obrazki/npc/hum/umarlak4.gif',
    'https://www.margonem.pl/obrazki/npc/hum/magaz-grabarz.gif',
    'https://www.margonem.pl/obrazki/npc/hum/magaz-zbrojmistrz.gif',
    'https://www.margonem.pl/obrazki/npc/pot/szkiel12.gif',
    'https://www.margonem.pl/obrazki/npc/pot/el_szkielet.gif',
    'https://www.margonem.pl/obrazki/npc/e2/grubber-ochlaj.gif',
    'https://www.margonem.pl/obrazki/npc/hum/krasnolud_boss.gif',
    'https://www.margonem.pl/obrazki/npc/pot/ugrape2.gif',
    'https://www.margonem.pl/obrazki/npc/e2/kambion.gif',
    'https://www.margonem.pl/obrazki/npc/hum/ogr3.gif',
    'https://www.margonem.pl/obrazki/npc/hum/ogr2.gif',
    'https://www.margonem.pl/obrazki/npc/hum/ogr1.gif',
    'https://www.margonem.pl/obrazki/npc/woj/pirat01.gif',
    'https://www.margonem.pl/obrazki/npc/woj/goral05.gif',
    'https://www.margonem.pl/obrazki/npc/pot/krab_big3.gif',
    'https://www.margonem.pl/obrazki/npc/hum/ice_queen.gif',
    'https://www.margonem.pl/obrazki/npc/woj/goral08.gif',
    'https://www.margonem.pl/obrazki/npc/hum/zagajnik02.gif',
    'https://www.margonem.pl/obrazki/npc/hum/zagajnik03.gif',
    'https://www.margonem.pl/obrazki/npc/hum/zagajnik01.gif',
    'https://www.margonem.pl/obrazki/npc/hum/orkczd.gif',
    'https://www.margonem.pl/obrazki/npc/hum/molochelita02n.gif',
    'https://www.margonem.pl/obrazki/npc/hum/amuno.gif',
    'https://www.margonem.pl/obrazki/npc/pot/stworzyciel.gif',
    'https://www.margonem.pl/obrazki/npc/hum/fodug_zolash.gif',
    'https://www.margonem.pl/obrazki/npc/hum/worundriel02.gif',
    'https://www.margonem.pl/obrazki/npc/hum/mechgoblin4.gif',
    'https://www.margonem.pl/obrazki/npc/kob/tri_adariel.gif',
    'https://www.margonem.pl/obrazki/npc/hum/praork_duch1.gif',
    'https://www.margonem.pl/obrazki/npc/pot/ogr_drapak.gif',
    'https://www.margonem.pl/obrazki/npc/hum/praork_low_elita.gif',
    'https://www.margonem.pl/obrazki/npc/hum/praork_mag_elita.gif',
    'https://www.margonem.pl/obrazki/npc/hum/praork_woj_elita.gif',
    'https://www.margonem.pl/obrazki/npc/hum/prakrolowa.gif',
    'https://www.margonem.pl/obrazki/npc/hum/minotaur-elita.gif',
    'https://www.margonem.pl/obrazki/npc/hum/driada04.gif',
    'https://dev.margonem.pl/obrazki/npc/pot/drzewoe2.gif',
    'https://www.margonem.pl/obrazki/npc/hum/forbol03.gif',
    'https://www.margonem.pl/obrazki/npc/hum/thuz-patr01.gif',
    'https://www.margonem.pl/obrazki/npc/hum/barbarzynca06.gif',
    'https://www.margonem.pl/obrazki/npc/hum/krolszczur.gif',
    'https://www.margonem.pl/obrazki/npc/hum/dziewica_nadzor.gif',
    'https://www.margonem.pl/obrazki/npc/hum/sekta_m_tortur_e2.gif',
    'https://www.margonem.pl/obrazki/npc/hum/sekta_zabojca_e2.gif',
    'https://www.margonem.pl/obrazki/npc/hum/sekta_mag_e2.gif',
    'https://www.margonem.pl/obrazki/npc/hum/sekta_pal_e2.gif',
    'https://www.margonem.pl/obrazki/npc/hum/sekta_wyr_serc.gif',
    'https://www.margonem.pl/obrazki/npc/pot/marlloth.gif',
    'https://www.margonem.pl/obrazki/npc/hum/maddok5.gif',
    'https://www.margonem.pl/obrazki/npc/pot/regina-e2.gif',
    'https://www.margonem.pl/obrazki/npc/tru/pajeczy16.gif',
    'https://www.margonem.pl/obrazki/npc/pot/maddok_roz.gif',
    'https://www.margonem.pl/obrazki/npc/pot/silvanasus.gif',
    'https://www.margonem.pl/obrazki/npc/pot/dendroculus.gif',
    'https://www.margonem.pl/obrazki/npc/e2/bolita.gif',
    'https://www.margonem.pl/obrazki/npc/hum/mahop04.gif',
    'https://www.margonem.pl/obrazki/npc/kob/tri2_witch_e2.gif',
    'https://www.margonem.pl/obrazki/npc/e2/mahoplowca.gif',
    'https://www.margonem.pl/obrazki/npc/pot/quetzalcoatl.gif',
    'https://www.margonem.pl/obrazki/npc/e2/chopesh2.gif',
    'https://www.margonem.pl/obrazki/npc/pot/szkiel_set.gif',
    'https://www.margonem.pl/obrazki/npc/hum/bar_smokoszef.gif',
    'https://www.margonem.pl/obrazki/npc/hum/bar_smoczyca.gif',
    'https://www.margonem.pl/obrazki/npc/hum/driada5.gif',
    'https://www.margonem.pl/obrazki/npc/pot/wl-mrozu01.gif',
    'https://www.margonem.pl/obrazki/npc/pot/wl-mrozu02.gif',
    'https://www.margonem.pl/obrazki/npc/pot/wl-mrozu03.gif',
].map((url, index) => ({
    imageUrl: url,
    id: index.toString(),
    primaryDescription: produceCharacterName(url),
    secondaryDescription: `level: ${((index * index) % 23) + 7}`,
}));
