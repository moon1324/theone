const index = async (req, res) => {
    res.set({ "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>Project Oneul</h1>");
};

export { index };
