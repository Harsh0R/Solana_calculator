use anchor_lang::prelude::*;

declare_id!("AQx5TJm3iJ4kvnkyvDomqhVcdhknhR474sbGbXe7gfht");

#[program]
pub mod helloword_calculator {
    use anchor_lang::solana_program::entrypoint::ProgramResult;

    use super::*;

    pub fn initialize(ctx: Context<Create> , init_message:String) -> ProgramResult {
        
        let calculator = &mut ctx.accounts.calculator;
        calculator.greeting = init_message;

        
        Ok(())
    }

    // pub fn add(ctx: Context<Addition> , x:i128 , y:i128) -> ProgramResult{
    //     let calculator = &mut ctx.accounts.calculator;
    //     calculator.result = x+y;
    //     Ok(())
    // }



}

#[derive(Accounts)]
pub struct Create<'info> {

    #[account(init , payer=user , space=264)]
    pub calculator: Account<'info , Calculator>,

    #[account(mut)]
    pub user:Signer<'info>,
    pub system_program:Program<'info , System>,    
}

// #[derive(Accounts)]
// pub struct Addition<'info>{
//     #[account(mut)]
//     pub calculator:Account<'info , Calculator>,
// }

#[account]
pub struct Calculator{
    greeting:String,
    result:i128
}