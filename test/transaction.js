let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server.js");

//Assertion style
chai.should();
chai.use(chaiHttp);

describe('Transaction API', () => {
    let transactionData;

    //Test create transaction API
    describe("POST /api/add", () => {
        it("It should POST a new transaction", (done) => {
            const transaction = {
                vehicleNumber: "KA05HE9055",
                isTwoWay: false
            };
            chai.request(server)
                .post("/api/add")
                .send(transaction)
                .end((err, response) => {
                    transactionData = response.body.receipt
                    response.should.have.status(201);
                    response.body.should.be.a('object');
                    response.body.should.have.property('receipt')
                    done();
                });
        });
        it("It should NOT POST a new transaction without the vehicleNumber property", (done) => {
            const transaction = {
                isTwoWay: false
            };
            chai.request(server)
                .post("/api/add")
                .send(transaction)
                .end((err, response) => {
                    response.should.have.status(400);
                    response.text.should.be.eq("Incorrect transaction details");
                    done();
                });
        });
    })

    //Test Get transaction API
    describe("GET /api/verifyReceipt/:transactionId", () => {
        it("It should determine if the vehicle should pass or not", (done) => {
            const transactionId = transactionData.receiptNumber;
            chai.request(server)
                .get("/api/verifyReceipt/" + transactionId)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('isValid');
                    done();
                });
        });
        it("It should not determine if the vehicle should pass or not", (done) => {
            const transactionId = 123;
            chai.request(server)
                .get("/api/verifyReceipt/" + transactionId)
                .end((err, response) => {
                    response.should.have.status(400);
                    response.text.should.be.eq("Incorrect transaction ID");
                    done();
                });
        });
    });
})