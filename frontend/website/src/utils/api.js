export default function getSections() {
  return [
    {
      title: 'The Deck',
      desc:
        'Special Euchridge decks are available, or the standard 52-card pack can be stripped to make a deck of 32 cards (A, K, Q, J, 10, 9 of each suit).'
    },
    {
      title: 'Object of the Game',
      desc:
        'The goal is to win at least three tricks. If the side that fixed the trump fails to get three tricks, it is said to be "euchred". Winning all five tricks is called a "march."'
    },
    {
      title: 'Rank of Cards',
      desc:
        'The highest trump is the jack of the trump suit, called the "right bower." The second-highest trump is the jack of the other suit of the same color called the "left bower." (Example: If diamonds are trumps, the right bower is J♦ and left bower is J♥.) The remaining trumps, and also the plain suits, rank as follows: A (high), K, Q, J, 10, 9.'
    },
    {
      title: 'Card Values and Scoring',
      desc:
        'If a partnership making trump wins 3 or 4 tricks – 1 point. If a partnership making trump wins 5 tricks – 2 points. If a player going alone wins 3 or 4 tricks – 1 point. If a player going alone wins 5 tricks – 4 points. If a partnership or a player going alone is euchred, opponents score 2 points. The first player or partnership to score 10 points wins the game.'
    },
    {
      title: 'The Draw',
      desc:
        'From the shuffled pack spread face down, the players draw cards for partners and first deal. The two players with the two lowest cards play against the two players with the two highest cards. The player with the lowest card deals first. For drawing, the cards rank: K (high), Q, J, 10, 9, 8, 7, A. Players drawing equal cards must draw again. Partners sit opposite each other.'
    },
    {
      title: 'The Deal',
      desc:
        "The cards are dealt clockwise, to the left, beginning with the player to the left of the dealer. Each player receives five cards. The dealer may give a round of three at a time, then a round of two at a time, or may give two, then three; but the dealer must adhere to whichever distribution plan he begins with. After the first deal, the deal passes to the player on the dealer's left. On completing the deal, the dealer places the rest of the pack in the center of the table and turns the top card face up. Should the card turned up be accepted as trump by any player, the dealer has the right to exchange the turned up card for another card in their hand."
    },
    {
      title: 'Making the Trump',
      desc:
        'Beginning with the player to the left of the dealer, each player passes or accepts the turn-up as trump. An opponent of the dealer accepts by saying "I order it up." The partner of the dealer accepts by saying, "I assist." The dealer accepts by making their discard, called "taking it up."<br>The dealer signifies refusal of the turn-up by removing the card from the top and placing it (face up) partially underneath the pack; this is called "turning it down."<br>If all four players pass in the first round, each player in turn, starting with the player to the dealer\'s left, has the option of passing again or of naming the trump suit. The rejected suit may not be named. Declaring the other suit of the same color as the reject is called "making it next"; declaring a suit of opposite color is called "crossing it."<br>If all four players pass in the second round, the cards are gathered and shuffled, and the next dealer deals. Once the trump is fixed, either by acceptance of the turn-up or by the naming of another suit, the turn-up is rejected, the bidding ends and play begins.'
    },
    {
      title: 'Playing Alone',
      desc:
        "If the player who fixes the trump suit believes it will be to their side's advantage to play without the help of their partner's cards, the player exercises this option by declaring \"alone\" distinctly at the time of making the trump. This player's partner then turns their cards face down and does not participate in the play."
    },
    {
      title: 'The Dummy',
      desc: 'TBD'
    },
    {
      title: 'The Play',
      desc:
        "The opening lead is made by the player to the dealer's left, or if this player's partner is playing alone, it is made by the player across from the dealer. If possible, each player must follow suit to a lead. If unable to follow suit, the player may trump or discard any card. A trick is won by the highest card of the suit led, or, if it contains trumps, by the highest trump. The winner of a trick leads next."
    }
  ];
}
