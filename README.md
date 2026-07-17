# Node Filesystem CLI

A command-line filesystem utility built with Node.js that allows users to create, read, write, append, rename, and delete files, as well as create, list, and delete directories directly from the terminal.

## Features

* Create files
* Read file contents
* Overwrite file contents
* Append content to files
* Delete files
* Rename files
* Create directories
* List directory contents
* Delete empty directories

## Usage

Run the CLI using:

```bash
node app.js <command> [arguments]
```

### Create a file

```bash
node app.js create notes
```

Creates a file named `notes.txt`.

### Read a file

```bash
node app.js read notes
```

Reads and displays the contents of `notes.txt`.

### Write to a file

```bash
node app.js write notes "Hello from Node.js"
```

Overwrites the existing contents of `notes.txt`.

### Append to a file

```bash
node app.js append notes "This is additional content"
```

Appends content to `notes.txt`.

### Delete a file

```bash
node app.js delete notes
```

Deletes `notes.txt`.

### Create a directory

```bash
node app.js mkdir projects
```

Creates a directory named `projects`.

### List directory contents

```bash
node app.js ls
```

Lists the contents of the current working directory.

### Rename a file

```bash
node app.js rename old new
```

Renames `old.txt` to `new.txt`.

### Delete an empty directory

```bash
node app.js rmdir projects
```

Deletes the `projects` directory.

## Technologies Used

* Node.js
* JavaScript
* Node.js File System (`fs`) module

## Project Purpose

This project was built to practice Node.js fundamentals, including command-line arguments, CommonJS modules, asynchronous filesystem operations, callbacks, error handling, closures, and command dispatch.
