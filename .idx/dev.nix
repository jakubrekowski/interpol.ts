{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-24.05"; # or "unstable"

  packages = [
    pkgs.nodejs_20 # Or your preferred Node.js version
    pkgs.nodePackages.typescript
    pkgs.nodePackages.npm
    # Add any other necessary packages for your library 
    # (e.g., testing frameworks like Jest or Mocha)
  ];

  # Sets environment variables in the workspace
  env = {};

  idx = {
    extensions = [
      "esbenp.prettier-vscode" # Example: Prettier for code formatting
      # Add other VS Code extensions useful for TypeScript development 
      # (e.g., "dbaeumer.vscode-eslint")
    ];

    previews = {
      enable = false; # You likely won't need a web preview for a library
      # If you have examples or documentation that need to be served:
      # previews = {
      #  docs = { 
      #    command = ["npm", "run", "docs:serve"]; 
      #    manager = "web"; 
      #  };
      # };
    };

    workspace = {
      onCreate = {
        npm-install = "npm install";
        default.openFiles = [
          "readme.md"
        ];
      };

      onStart = {
        # Optional: Start a process (like a type checker) in the background
        # type-check = "tsc --watch";
      };
    };
  };
}