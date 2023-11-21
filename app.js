
import { menu, pause, readLine } from './helpers/inquirer.js';



const main = async() => {
    let option = 0;
    do {
        option = await menu();
        switch (option) {
            case 1:
                const city = await readLine('City: '); 
                break;
            case 2:
                
                break;
        }
        if(option !== 0) await pause();
    } while (option !== 0);
};


main();