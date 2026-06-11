import express from  "express";
    import {ENV} from "./Lib/env.js";

const app = express();

console.log(ENV.PORT);
console.log(ENV.DB_URL);

app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ msg: "api is up and running" });
});

app.get("/books", (req,res) => {
    res.status(200).json({msg:"this is the books endpoint"});
});

// make our app ready for deployment
if(ENV.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../Frontend/dist")))

    app.get("/{*any}", (req,res) => {
        res.sendFile(path.join(__dirname, "../Frontend", "dist", "index.html"));
    }) 
}

// make our app ready for deployment
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../Frontend/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../Frontend", "dist", "index.html"));
  });
}

const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => console.log("Server is running on port:", ENV.PORT));
  } catch (error) {
    console.error("💥 Error starting the server", error);
  }
};

startServer();

console.log("PUBLISHABLE:", ENV.CLERK_PUBLISHABLE_KEY);
console.log("SECRET:", ENV.CLERK_SECRET_KEY);
 
app.get("/", (req, res) => {
  res.send("Backend is working!");
});