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

function write(cleanFilename, content){
    fs.writeFile(
        `${cleanFilename}.txt`,
        `${content}`,
        (error) => {
            if (error) {
                console.log("Something went wrong:", error.message);
                return;
            }

            console.log("Content added successfully!");
        }
    );
}

function appendContent(cleanFilename, content){
    fs.appendFile(
        `${cleanFilename}.txt`,
        `\n${content}`,
        (error) => {
            if (error) {
                console.log("Something went wrong:", error.message);
                return;
            }

            console.log("Content added to the file successfully!");
        }
    );
}

function removeFile(cleanFilename){
    fs.unlink(
        `${cleanFilename}.txt`,
        (error) => {
            if (error) {
                console.log("Something went wrong:", error.message);
                return;
            }

            console.log("File deleted successfully!");
        }
    );
}

function makeDirectory(cleanFilename){
    fs.mkdir(
        `${cleanFilename}`,
        (error) => {
            if (error) {
                console.log("Something went wrong:", error.message);
                return;
            }

            console.log("Directory created successfully!");
        }
    );
}

function main() {
    const operation = process.argv[2];
    const filename = process.argv[3];
    const content = process.argv.slice(4).join(" ");

    if(operation !== "create" && operation!=="read" && operation!=="write" && operation!=="append" && operation!=="delete" && operation!=="mkdir"){
        console.log("enter a valid command my G!");
        return;
    }

    if((operation==="write" || operation==="append") && !(content)){
        console.log("please specify the contents to write!");
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
    else if(operation === "write"){
        write(cleanFilename, content);
    }
    else if(operation === "append"){
        appendContent(cleanFilename, content);
    }else if(operation === "delete"){
        removeFile(cleanFilename);
    }else if(operation ==="mkdir"){
        makeDirectory(filename);
    }

}

main();





