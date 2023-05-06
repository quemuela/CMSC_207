USE [TaskTracker]
GO

/****** Object:  Table [dbo].[Tasks]    Script Date: 5/6/2023 7:01:53 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Tasks](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Title] [varchar](255) NULL,
	[Description] [varchar](255) NULL,
	[RaisedBy] [varchar](255) NULL,
	[Assignee] [varchar](255) NULL,
	[StartDate] [varchar](255) NULL,
	[EndDate] [varchar](255) NULL,
	[Status] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


