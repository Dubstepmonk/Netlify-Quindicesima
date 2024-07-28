package Email;


import org.apache.velocity.app.Velocity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

@SpringBootApplication
public class DataJpaApplication {
//	@Autowired
//	 private EmailService senderService;

	public static void main(String[] args) {
		SpringApplication.run(DataJpaApplication.class, args);
//		System.out.println(Velocity.resourceExists("src/main/resources/registration-confirmation.vm"));
	}
//	 @EventListener(ApplicationReadyEvent.class)
//	 public void sendMail(){
//
//	  senderService.sendEmail("qrkwangw@gmail.com","nimama","oh yeah baby");
//	 }
}
