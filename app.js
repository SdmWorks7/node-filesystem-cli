const fs = require("fs");

function normalizeFilename(filename){
    if(filename.endsWith(".txt")){
        return filename.slice(0, -4);
    }
        return filename;
}

function create(cleanFilename){
    fs.writeFile(
        `${cleanFilename}.txt`,
        "My G just created a file",
        (error) => {
            if (error) {
                console.log("Something went wrong:", error.message);
                return;
            }

            console.log("File created successfully!");
        }
    );
}

function read(cleanFilename){
    fs.readFile(`${cleanFilename}.txt`, "utf-8", (error, data)=>{
            if(error){
                console.log("Encountered an error", error.message);
                return;
            }
            console.log("The Content: ", data);
        })
}

function main() {
    const operation = process.argv[2];
    const filename = process.argv[3];

    if(operation !== "create" && operation!=="read"){
        console.log("enter a valid command my G!");
        return;
    }

    if (!filename) {
        console.log("You don't want an empty filename!");
        return;
    }
    const cleanFilename = normalizeFilename(filename);

    if (operation === "create") {
        create(cleanFilename);
    }
    else if(operation === "read"){
        read(cleanFilename);
    }

}

main();





