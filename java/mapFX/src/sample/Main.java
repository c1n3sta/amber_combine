package sample;

import javafx.application.Application;
import javafx.event.Event;
import javafx.stage.Stage;
import javafx.stage.*;
import javafx.scene.paint.*;
import javafx.scene.shape.*;
import javafx.scene.input.*;
import javafx.scene.image.*;
import javafx.scene.layout.*;
import javafx.scene.media.Media;
import javafx.scene.media.MediaPlayer;
import javafx.scene.media.MediaView;
import javafx.animation.*;
import javafx.geometry.*;
import javafx.util.Duration;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.scene.Scene;

public class Main extends Application {
    //Множитель SCALE2 ответственен за масштабируемость элементов на экране с картинками
    //Хоть и все размеры абсолютные, однако они все зависят от размера окна
    int SCALE2=2;
    int SCALE1=12;
    //Отступ сверху окна для экрана с изображениями
    int VERTICAL_SPACE=25;
    //Количество навигационных элементов
    int Rcount=8;
    //Глобальные переменные для первого и второго экрана
    StackPane root;
    Screen screen;
    Scene scene,scene2;
    Stage stage,stage2;
    AnchorPane root2;

    //Заставка для первого и второго экрана, которая включается если в течение некоторого времени ничего не происходит
    MediaView screener2,screener;
    MediaPlayer playerScreener2,playerScreener;

    MediaPlayer players[];
    MediaView mediaviews[];
    //Первый экран - экран маппинга с видео
    //Второй экран - экран с навигационной панелью, экран с изображениями
    //Текущий номер выбранного элемента на экране. С самого начала выбран последний элемент - лого ЯК
    int currentItem=1;
    //Картинки в центре для второго экрана
    ImageView[] I;
    //Количество тиков таймера(по 1 сек) чтобы вернуться к ожидающему экрану при бездействии
    int timerTickToReload=25;
    //Текущее количество тиков
    int timerTick=0;
    @Override
    public void start(Stage primaryStage) throws Exception{
        stage=primaryStage;
        root = new StackPane();
        stage.setTitle("Карта Янтарного комбината");
        screen = Screen.getPrimary();
        Rectangle2D bounds = screen.getVisualBounds();
        //primaryStage.setX(bounds.getMinX());
        //primaryStage.setWidth(bounds.getWidth());
        //primaryStage.setHeight(bounds.getHeight());

        playerScreener = new MediaPlayer( new Media(getClass().getResource("video/cycle.mp4").toExternalForm()));
        screener = new MediaView(playerScreener);
        screener.setFitWidth(160*SCALE1);
        screener.setFitHeight(90*SCALE1);
        //playerScreener.setStartTime(Duration.seconds(0));
        //playerScreener.setStopTime(playerScreener.getTotalDuration());
        playerScreener.setCycleCount(MediaPlayer.INDEFINITE);
        playerScreener.play();
        root.getChildren().add(screener);
        defineVideoVariables();


        scene = new Scene(root);
        scene.setFill(Color.BLACK);
        stage.setScene(scene);
        stage.show();
        stage.setFullScreen(true);

        stage2=new Stage();
        root2 = new AnchorPane();
        stage2.setTitle("Карта Янтарного комбината");

        stage2.setX(bounds.getWidth()-200);
        stage2.setY(200);
        stage2.setWidth(160*SCALE2);
        stage2.setHeight(90*SCALE2+VERTICAL_SPACE);
        scene2 = new Scene(root2);
        scene2.setFill(Color.BLACK);
        //Бэграундовая картинка для второго экрана
        Image mask = new Image(getClass().getResource("images/mask.png").toExternalForm());
        ImageView maskView = new ImageView(mask);
        maskView.setFitWidth(160*SCALE2);
        maskView.setFitHeight(90*SCALE2);
        maskView.setVisible(false);

        I=setImages();
        //I[Rcount].setVisible(true);

        int j;
        //Кликабельные области
        Rectangle R[]=defineClickRectangles();
        for(j=0;j<=Rcount;j++){
            root2.getChildren().add(I[j]);
        }

        root2.getChildren().add(maskView);
        for(j=0;j<Rcount;j++){
            root2.getChildren().add(R[j]);
        }

        playerScreener2 = new MediaPlayer( new Media(getClass().getResource("video/cycle.mp4").toExternalForm()));
        screener2 = new MediaView(playerScreener2);
        root2.getChildren().add(screener2);
        screener2.setFitWidth(160*SCALE2);
        screener2.setFitHeight(90*SCALE2);
        playerScreener2.setCycleCount(MediaPlayer.INDEFINITE);
        playerScreener2.play();
        screener2.setOnMouseClicked(new EventHandler<MouseEvent>(){
            public void handle(MouseEvent event){
                changeCurrentItem(Rcount);
                screener2.setVisible(false);
                screener.setVisible(false);
                players[currentItem].play();
                mediaviews[currentItem].setVisible(true);
                maskView.setVisible(true);
                I[currentItem].setVisible(true);
            }
        });
        setKeyListeners();
        stage2.setScene(scene2);
        stage2.show();

        Timeline fiveSecondsWonder = new Timeline(new KeyFrame(Duration.seconds(1), new EventHandler<ActionEvent>() {
            @Override
            public void handle(ActionEvent event) {
                //Жуткий костыль из-за того что jar не реализует loop
                playerScreener.dispose();
                playerScreener=new MediaPlayer( new Media(getClass().getResource("video/cycle.mp4").toExternalForm()));
                screener.setMediaPlayer(playerScreener);
                playerScreener.play();

                playerScreener2.dispose();
                playerScreener2=new MediaPlayer( new Media(getClass().getResource("video/cycle.mp4").toExternalForm()));
                screener2.setMediaPlayer(playerScreener2);
                playerScreener2.play();

                timerTick++;
                if(timerTick==timerTickToReload){
                    I[currentItem].setVisible(false);
                    maskView.setVisible(false);
                    changeCurrentItem(Rcount);
                    timerTick=0;
                    players[Rcount].stop();
                    screener2.setVisible(true);
                    screener.setVisible(true);
                    players[currentItem].stop();
                    mediaviews[currentItem].setVisible(false);
                }
            }
        }));
        fiveSecondsWonder.setCycleCount(Timeline.INDEFINITE);
        fiveSecondsWonder.play();
    }
    //Функция в которой объявляются все маппинг-видео и плееры с ними связанные
    public void defineVideoVariables(){
        players=new MediaPlayer[Rcount+1];
        mediaviews=new MediaView[Rcount+1];
        for(int j=0;j<=Rcount;j++) {
            players[j] = new MediaPlayer(new Media(getClass().getResource("video/"+(j+1)+".mp4").toExternalForm()));
            mediaviews[j] = new MediaView(players[j]);
            mediaviews[j].setFitWidth(160 * SCALE1);
            mediaviews[j].setFitHeight(90 * SCALE1);
            players[j].setCycleCount(MediaPlayer.INDEFINITE);
            players[j].setAutoPlay(false);
            mediaviews[j].setVisible(false);
            if(j==Rcount) players[Rcount].setCycleCount(0);
            root.getChildren().add(mediaviews[j]);
        }
    }
    //Функция задающая кликабельные области для экрана с изображениями
    public Rectangle[] defineClickRectangles(){
        int j;
        Rectangle R[]=new Rectangle[Rcount];
        for(j=0;j<Rcount;j++){
            R[j] = new Rectangle(45*SCALE2,22.5*SCALE2);
            R[j].setOpacity(0);
            //Чтобы посмотреть где располагаются эти области можно раскоментить следующую строчку и закоментить предыдущую
            //R[j].setFill(Color.GREEN);

        }
        R[0].setX(0);R[0].setY(0);
        R[1].setX(0);R[1].setY(22.5*SCALE2);
        R[2].setX(0);R[2].setY(22.5*SCALE2*2);
        R[3].setX(0);R[3].setY(22.5*SCALE2*3);
        R[4].setX(stage2.getWidth()-45*SCALE2);R[4].setY(0);
        R[5].setX(stage2.getWidth()-45*SCALE2);R[5].setY(22.5*SCALE2);
        R[6].setX(stage2.getWidth()-45*SCALE2);R[6].setY(22.5*SCALE2*2);
        R[7].setX(stage2.getWidth()-45*SCALE2);R[7].setY(22.5*SCALE2*3);

        R[0].setOnMouseClicked(new EventHandler<MouseEvent>(){
            public void handle(MouseEvent event){
                changeCurrentItem(0);
            }
        });
        R[1].setOnMouseClicked(new EventHandler<MouseEvent>(){
            public void handle(MouseEvent event){
                changeCurrentItem(1);
            }
        });
        R[2].setOnMouseClicked(new EventHandler<MouseEvent>(){
            public void handle(MouseEvent event){
                changeCurrentItem(2);
            }
        });
        R[3].setOnMouseClicked(new EventHandler<MouseEvent>(){
            public void handle(MouseEvent event){
                changeCurrentItem(3);
            }
        });
        R[4].setOnMouseClicked(new EventHandler<MouseEvent>(){
            public void handle(MouseEvent event){
                changeCurrentItem(4);
            }
        });
        R[5].setOnMouseClicked(new EventHandler<MouseEvent>(){
            public void handle(MouseEvent event){
                changeCurrentItem(5);
            }
        });
        R[6].setOnMouseClicked(new EventHandler<MouseEvent>(){
            public void handle(MouseEvent event){
                changeCurrentItem(6);
            }
        });
        R[7].setOnMouseClicked(new EventHandler<MouseEvent>(){
            public void handle(MouseEvent event){
                changeCurrentItem(7);
            }
        });
        return R;
    }
    //Функция меняющая текущий выбранный элемент на кликнутый на втором экране
    //Меняет видео на первом экране и меняет картинку в центре на втором
    public void changeCurrentItem(int num){
        if(num!=currentItem) {
            if(currentItem==Rcount && timerTick<10){
                return;
            }
            I[currentItem].setVisible(false);
            players[currentItem].stop();
            mediaviews[currentItem].setVisible(false);
            currentItem = num;

            timerTick = 0;
            I[num].setVisible(true);
            players[num].play();
            mediaviews[currentItem].setVisible(true);
            System.out.println(num);
        }
    }
    //Функция создающая изображение в центре экрана с изображениями
    public ImageView[] setImages(){
        ImageView I[]=new ImageView[Rcount+1];
        Image im;
        for(int j=0;j<Rcount;j++){
            im = new Image(getClass().getResource("images/b"+(j+1)+".jpg").toExternalForm());
            I[j] = new ImageView(im);
            I[j].setFitWidth(90*SCALE2*4/3);
            I[j].setFitHeight(90*SCALE2);
            I[j].setX(stage2.getWidth()/2-I[j].getFitWidth()/2);
            I[j].setVisible(false);
        }
        //Добавляем еще 1 элемент - лого ЯК
        im = new Image(getClass().getResource("images/logo.png").toExternalForm());
        I[Rcount] = new ImageView(im);
        I[Rcount].setFitWidth(90*SCALE2*4/3);
        I[Rcount].setFitHeight(90*SCALE2);
        I[Rcount].setX(stage2.getWidth()/2-I[Rcount].getFitWidth()/2);
        I[Rcount].setVisible(false);
        return I;
    }
    //Для первого и второго экрана создаю отлавливание клавиши escape. Приложение сразу же закроется
    public void setKeyListeners(){
        scene.addEventHandler(KeyEvent.KEY_PRESSED, (key) -> {
            if(key.getCode()==KeyCode.ESCAPE) {
                stage.close();
                stage2.close();
            }
        });
        scene2.addEventHandler(KeyEvent.KEY_PRESSED, (key) -> {
            if(key.getCode()==KeyCode.ESCAPE) {
                stage.close();
                stage2.close();
            }
        });
    }
    public static void main(String[] args) {
        launch(args);
    }
}
