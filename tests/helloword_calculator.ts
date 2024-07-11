import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { HellowordCalculator } from "../target/types/helloword_calculator";
import { expect } from "chai";

describe("helloword_calculator", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.HellowordCalculator as Program<HellowordCalculator>;

  const programProvider = program.provider as anchor.AnchorProvider;

  const calculatorKeyPair = anchor.web3.Keypair.generate();

  const text = "This is my solana calculator"

  it("Is initialized!", async () => {
    // Add your test here.
    // const tx = await program.methods.create(text).accounts({
    //   calculator: calculatorKeyPair.publicKey,
    //   user: programProvider.wallet.publicKey,
    //   systemProgram: anchor.web3.SystemProgram.programId
    // }).signer([calculatorKeyPair]).rpc();
    // console.log("Your transaction signature", tx);

    // const account = await program.account.calculator.fetch(calculatorKeyPair.publicKey)
    // expect(account.greeting).to.eql(text)

  });

  it("Adding Two Numbers", async () => {

    // await program.methods.add(new anchor.BN(10), new anchor.BN(15)).accounts({
    //   calculator: calculatorKeyPair.publicKey,

    // }).rpc()

    // const account = await program.account.calculator.fetch(calculatorKeyPair.publicKey)
    // expect(account.greeting).to.eql(new anchor.BN(25))



  })

});
