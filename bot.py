import discord
from discord.ext import commands
import os

# Replit has a feature to securely store your token.
# We will get the token from a secret variable.
TOKEN = os.environ.get("DISCORD_BOT_TOKEN")

intents = discord.Intents.default()
intents.message_content = True

bot = commands.Bot(command_prefix="!", intents=intents)

@bot.event
async def on_ready():
    print(f"Logged in as {bot.user}")

@bot.command()
async def Hello(ctx):
    await ctx.send("Fuck you")

bot.run(TOKEN)
