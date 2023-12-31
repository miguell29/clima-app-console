import inquirer from 'inquirer';
import 'colors';

const questions =[
    {
        type:'list',
        name:'option',
        message:'Choose an option',
        choices:[
            {
                value: 1,
                name:`${'1.'.green} search city`
            },
            {
                value: 2,
                name:`${'2.'.green} History`
            },
            {
                value: 0,
                name:`${'0.'.green} Exit`
            }
        ]},
        {
            type:'input',
            name:'pause',
            message:`Press ${'ENTER'.green} to continue`
        }
];


export const menu = async () => {
    console.clear();
    const {option} = await inquirer.prompt(questions[0]);
    return option;
}
export const pause = async () => {
    const {pause} = await inquirer.prompt(questions[1]);
    return pause;
}

export const readLine = async (message) => {
    const questions = [
        {
            type: 'input',
            name: 'description',
            message,
            validate(value){
                if(value.length === 0){
                    return 'Please enter a value';
                }
                return true;
            }
        }
    ]
    const {description} = await inquirer.prompt(questions);
    return description;
}

export const menuDelete = async (tasks = []) => {
    const choices = tasks.map((task, i) => {
        const index = `${i + 1}.`.green;
        return {
            value: task.id,
            name: `${index} ${task.description}`
        }
    });

    choices.unshift({
        value: '0',
        name: '0.'.green + ' Cancel'
    });

    const questions = [
        {
            type: 'list',
            name: 'id',
            message: 'Delete',
            choices
        }
    ];
    const {id} = await inquirer.prompt(questions);
    return id;
}

export const confirm = async (message) => {
    const questions = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]

    const {ok} = await inquirer.prompt(questions);
    return ok;
}
export const showCheckList = async (tasks = []) => {
    const choices = tasks.map( (task, id) => {
        const index = `${id + 1}.`.green;
        return {
            value: task.id,
            name: `${index} ${task.description}`,
            checked: (task.completed) ? true : false
        }
    })

    const questions = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Select',
            choices
        }
    ]

    const {ids} = await inquirer.prompt(questions);
    return ids;

}
