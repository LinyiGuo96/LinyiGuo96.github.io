---
layout: post
title: Quantitative Finance in Python
---

# Preface

My initial of learning this course is to strengthen my background/understanding in financial products and financial engineering. By learning those techniques and getting some hands-on experience, I believe I would be able to do more advanced/important jobs and make more contributions to this society (also get more compensation :D ).

# Summary of Contents

- Stock Market Basics
- Bonds Theory
- Bonds Implementation
- Modern Portfolio Theory (Markowitz-Model)
- Markowitz-Model Implementation
- CAPM Theory
- CAPM Implementation
- Derivatives Basics
- Random Behavior in Finance
- Black-Scholes Model
- Black-Scholes Model Implementation
- VaR
- CDOs (Collateralized Debt Obligations) and the Financial Crisis
- Interest Rate Modelling (Vasicek Model)
- Pricing Bonds with Vasicek Model
- Long-Term Investing 


# Stock Market Basics

## Time value of Money

Present value (PV)  VS  Future value (FV)

$$FV= PV * (1+r)^n$$

With continuous models, we have differential equations:
$$x(t+dt) - x(t) = \frac{dx(t)}{dt}dt$$

Also we have 
$$x(t+dt) - x(t) = r x(t) dt$$

That is 
$$\frac{dx(t)}{dt} = r x(t)$$

The solution to this differential equation is 
$$x(t) = x(0) e^{rt}$$

Under FV and PV, we have 
$$FV = PV e^{rt}$$

## Stocks

Company <-> stock exchange <-> broker firms <-> investors

Risky - measure : volatility, standard deviation/variance, measurere of dispersion, CAPM (the $\beta$)

## Commodities

Extremely Volatile

Derivative: Futures, avoid market volatility

Commodities <-> future market <-> future broker firms <-> investors/companies

## Currencies (Forex, foreign exchange)

Interest rate: positive correlation with exchange rate

Money supply: print too much currency will trigger inflation

Financial stability: impact exchange rate 

Arbitrage on the FOREX: [Bellman-Ford shortest path algorithm](https://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm), where negative cycles are the arbitrage opportunities.
 
## Long and short

Long: own the security we buy, loss at most 100%

Short: sell the security we borrow, loss no limit, riskier


# Bonds

Principle

Interest rate

Time

Frequency 


 







