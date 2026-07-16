const fs = require("fs");

function main() {
    const operation = process.argv[2];
    const filename = process.argv[3];

    if (operation !== "create") {
        console.log("Enter a valid command my G!");
        return;
    }

    if (!filename) {
        console.log("You don't want an empty filename!");
        return;
    }

    const cleanFilename = filename.endsWith(".txt")
    ? filename.slice(0, -4)
    : filename;

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

main();





