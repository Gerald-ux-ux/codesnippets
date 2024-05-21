import { databaseConnection } from "@/lib/backend/db/cs";
import "dotenv/config";

async function testDatabaseConnection() {
  try {
    await databaseConnection();
    console.log("Database connection successful");
    process.exit(0);
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
}

testDatabaseConnection();
