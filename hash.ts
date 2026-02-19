import bcrypt from "bcrypt";

async function run() {
  const hash = await bcrypt.hash("haslo123", 10);
  console.log("HASH:", hash);
}

run();
