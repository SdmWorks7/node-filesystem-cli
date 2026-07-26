const fs = require("fs");
const path = require("path");

function normalizeFilename(filename){
    if(!path.extname(filename)){
        return `${filename}.txt`;
    }
        return filename;
}

function create(cleanFilename){
    fs.writeFile(
        `${cleanFilename}`,
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
    fs.readFile(`${cleanFilename}`, "utf-8", (error, data)=>{
            if(error){
                console.log("Encountered an error", error.message);
                return;
            }
            console.log("The Content: ", data);
        })
}

function write(cleanFilename, content){
    fs.writeFile(
        `${cleanFilename}`,
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
        `${cleanFilename}`,
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
        `${cleanFilename}`,
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

function listFiles(){
    fs.readdir(
        process.cwd(),
        (error, files) => {
            if (error) {
                console.log("Something went wrong:", error.message);
                return;
            }

            console.log(files.join("\n"));
        }
    );
}

function renameFile(cleanFilename, cleanNewFilename){
    fs.rename(
        `${cleanFilename}.txt`,
        `${cleanNewFilename}.txt`,
        (error) => {
            if (error) {
                console.log("Something went wrong:", error.message);
                return;
            }

            console.log("File name changed successfully");
        }
    );
}

function removeDirectory(filename){
    fs.rmdir(
        `${filename}`,
        (error) => {
            if (error) {
                console.log("Something went wrong:", error.message);
                return;
            }

            console.log("Directory deleted successfully!");
        }
    );
}

function getSafePath(userInput) {
    const baseDirectory = process.cwd();

    const requestedPath = path.resolve(
        baseDirectory,
        userInput
    );

    const relativePath = path.relative(
        baseDirectory,
        requestedPath
    );

    if (relativePath.startsWith("..")) {
        throw new Error("Path escapes the working directory");
    }

    return requestedPath;
}

function main() {
    const operation = process.argv[2];
    const filename = process.argv[3];
    const content = process.argv.slice(4).join(" ");
    const newFilename = process.argv[4];
    let cleanFilename, cleanNewFilename, filePath;

    const commands = {
    create: () => create(filepath),
    read: () => read(filePath),
    write: () => write(filePath, content),
    append: () => appendContent(filePath, content),
    delete: () => removeFile(filePath),
    mkdir: () => makeDirectory(filename),
    ls: () => listFiles(),
    rename: () => renameFile(cleanFilename, cleanNewFilename),
    rmdir: () => removeDirectory(filename)
    };

    if(!commands[operation]){
        console.log("enter a valid command my G!");
        return;
    }

    if(operation==="rename" && ((!filename) || (!newFilename))){
            console.log("INVALID! enter the old and new file name!");
        return;
    } 
    else if(operation==="rename" && newFilename){
        cleanNewFilename = normalizeFilename(newFilename);
    }

    if((operation==="write" || operation==="append") && !(content)){
        console.log("please specify the contents to write!");
        return;
    }

    if (operation!=="ls" && (!filename)) {
        console.log("You don't want an empty filename!");
        return;
    }
    if(operation!=="ls"){
        cleanFilename = normalizeFilename(filename);
        filePath = getSafePath(cleanFilename);
    }

    commands[operation]();

}

main();