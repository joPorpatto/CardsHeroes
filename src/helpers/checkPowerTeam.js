


export const checkPowerTeam = (hero) =>{
               
                if (hero.powerstats.intelligence === "null") hero.powerstats.intelligence = 0;
                if (hero.powerstats.strength === "null") hero.powerstats.strength = 0;
                if (hero.powerstats.speed === "null") hero.powerstats.speed = 0;
                if (hero.powerstats.durability === "null") hero.powerstats.durability = 0;
                if (hero.powerstats.power === "null") hero.powerstats.power = 0;
                if (hero.powerstats.combat === "null") hero.powerstats.combat = 0;
                return hero
}