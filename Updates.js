let status = [
  {
    type: "AuctionCountDown",
    mia: "museo",
    data: {
      time_remaining: 120,
    },
  },
  {
    type: "BidStatus",
    mia: "museo",
    data: {
      current_highest_bid: 5000,
      user_status: "leading",
    },
  },
  {
    type: "AuctionParticipation",
    mia: "museo",
    data: {
      participants: 120,
    },
  },
  {
    type: "NewAuctionNotification",
    mia: "museo",
    data: {
      new_auctions: 5,
    },
  },
  {
    type: "PaymentStatus",
    mia: "museo",
    data: {
      transaction_id: "TX12345",
      status: "completed",
    },
  },
  {
    type: "KYCVerificationStatus",
    mia: "museo",
    data: {
      kyc_status: "approved",
    },
  },
  {
    type: "WalletBalanceUpdate",
    mia: "museo",
    data: {
      wallet_balance: 1500.75,
    },
  },
  {
    type: "ArtPiecePopularity",
    mia: "museo",
    data: {
      art_piece_id: "ART123",
      views: 200,
      likes: 50,
    },
  },
  {
    type: "LiveBiddingActivity",
    mia: "museo",
    data: [
      {
        time: "10:01",
        amount: 4000,
      },
      {
        time: "10:02",
        amount: 2500,
      },
      {
        time: "10:03",
        amount: 5000,
      },
      {
        time: "10:03",
        amount: 5500,
      },
      {
        time: "10:03",
        amount: 2000,
      },
    ],
  },
  {
    type: "AuctionResults",
    mia: "museo",
    data: {
      total_sales: 10,
      total_revenue: 50000,
    },
  },
  {
    type: "FavoriteArtAlerts",
    mia: "museo",
    data: [
      {
        art_piece_id: "ART789",
        alert: true,
      },
      {
        art_piece_id: "ART456",
        alert: true,
      },
      {
        art_piece_id: "ART123",
        alert: false,
      },
      {
        art_piece_id: "ART321",
        alert: true,
      },
    ],
  },
  {
    type: "SystemNotifications",
    mia: "museo",
    data: {
      notifications: [
        {
          message: "System maintenance scheduled for tonight at 12 AM.",
          timestamp: "2023-07-01T12:00:00Z",
        },
        {
          message: "New features have been added to the auction system.",
          timestamp: "2023-07-01T12:05:00Z",
        },
      ],
    },
  },
  {
    type: "AuctionStartReminder",
    mia: "museo",
    data: [
      {
        auction_id: "AUC123",
        start_time: "2023-07-01T14:00:00Z",
      },
      {
        auction_id: "AUC124",
        start_time: "2023-07-01T14:00:00Z",
      },
      {
        auction_id: "AUC125",
        start_time: "2023-07-01T14:00:00Z",
      },
    ],
  },
  {
    type: "PersonalMessages",
    mia: "museo",
    data: {
      messages: [
        {
          from: "Auctioneer",
          subject: "Welcome to the new auction!",
          timestamp: "2023-07-01T10:00:00Z",
        },
        {
          from: "Support",
          subject: "Your issue has been resolved.",
          timestamp: "2023-07-01T11:00:00Z",
        },
      ],
    },
  },
];

module.exports = status;
