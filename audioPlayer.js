library(shiny)
library(howler)

ui <- fluidPage(
  title = "VULTURES",
  howler(
    elementId = "sound", 
    tracks = list("Track 1" = "audio/01-stars.mp3", "Track 2" = "audio/02-keys-to-my-life.mp3", "Track 3 = "audio/03-paid.mp3", "Track 4" = "audio/04-talking.mp4", "Track 5" = "audio/05-back-to-me.mp3", "Track 6 = "06-hoodrat.mp3", "Track 7" = "07-do-it.mp3", "Track 8" = "08-paperwork.mp3", "Track 9" = "09-burn.mp3", "Track 10" = "10-fuk-sumn.mp3", "Track 11" = "11-vultures.mp3", "Track 12" = "12-carnival.mp3", "Track 13" = "13-beg-forgiveness.mp3", "Track 14" = "14-good-(don't-die).mp3", "Track 15" = "15-problematic.mp3", "Track 16" = "16-king.mp3"),
    auto_continue = TRUE,
    auto_loop = FALSE,
    seek_ping_rate = 1000
  ),
  howlerPreviousButton("sound"),
  howlerPlayPauseButton("sound"),
  howlerNextButton("sound")
)

server <- function(input, output, session) {
  observe({
    req(input$sound_seek)
    if (round(input$sound_seek) == 10) {
      pauseHowl("sound")
    } else if (round(input$sound_seek) == 20) {
      changeTrack("sound", "Track 2")
    }
  })
}

shinyApp(ui, server)
