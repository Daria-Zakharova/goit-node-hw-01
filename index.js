
const contacts = require("./contacts");
const yargs = require("yargs");
const {hideBin} = require("yargs/helpers");


const invokeAction = async ({ action, id, name, email, phone }) => {
    id = String(id);
    switch (action) {
        case "list":
            const listOfContacts = await contacts.listContacts();
            return console.table(listOfContacts);
        case "get":
            const searchedContact = await contacts.getContactById(id);
            return console.log(searchedContact);

        case "add":
            const newContact = await contacts.addContact({name, email, phone});
            return console.log(newContact);
    
        case "update":
            const updatedContact = await contacts.updateContact(id, {name, email, phone});
            return console.log(updatedContact);

        case "remove":
            const removedContact = await contacts.removeContact(id);
            return console.log(removedContact);

        default:
            console.warn("\x1B[31m Unknown action type!");
    }
}

const arr = hideBin(process.argv);
const {argv} = yargs(arr);

invokeAction(argv);