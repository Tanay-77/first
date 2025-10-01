const {command, program} = require("commander")

program     // This is the main CLI app object.   Think of it as the “entry point” of your CLI.
.name("mycli")  // CLI tool name
.description("my first cli") // Description when running --help
.version("0.8.0") // Version when running --version

program.command("greet")  // greet is the command
.argument("<name>","name to greet") //  <name> is required arg
.option("-u, --uppercase", "Make greeting uppercase") //Adds flags / options (like --uppercase or -u).
  .action((name, options) => {
    let message = `Hello, ${name}!`;
    if (options.uppercase) {
      message = message.toUpperCase();
    }
    console.log(message);
  });

program.parse(process.argv); // This tells Commander to process user input from the terminal. Always keep it at the end.
