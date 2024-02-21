library(shiny)
library(howler)

ui <- fluidPage(
  title = "howler Example",
  howler(
    elementId = "sound", 
    tracks = list("Track 1" = "audio/track_1.mp3", "Track 2" = "audio/track_2.mp3"),
    auto_continue = TRUE,
    auto_loop = TRUE,
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
