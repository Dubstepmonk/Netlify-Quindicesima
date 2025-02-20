package Email;

import java.util.HashMap;
import java.util.Map;

import javax.mail.MessagingException;

import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.VelocityEngine;
import org.apache.velocity.spring.VelocityEngineUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import Model.Person;
@Controller
@CrossOrigin(origins = "https://quindicesima.com")
//@CrossOrigin(origins = "http://localhost:3000")
public class EmailController {
    @Autowired
    EmailService emailService;
	
	@PostMapping("/booktrial")
	public ResponseEntity<String> receiveUserDetails(@RequestBody Person person) throws MessagingException{
		
//		System.out.println(person.getFirstName());
		if(person!=null) {
			   // Check if trialtime is populated correctly
//			System.out.println("testing received number anot" + person.getContactNumber());
//	        System.out.println("Trial Time received: " + person.getTrialTime());
//			EmailService emailService = new EmailService();
//			VelocityEngine velocityEngine = new VelocityEngine();
//			velocityEngine.init();
//			VelocityContext context = new VelocityContext();
//			 Map model = new HashMap<>();
//             model.put("firstname", person.getFirstName());
//			String text =VelocityEngineUtils.mergeTemplateIntoString(velocityEngine
//                    , "src/main/resources/registration-confirmation.vm",model);
			emailService.sendEmail(person);
			return ResponseEntity.ok("Form submitted successfully!");
		}
		 String errorMessage = "Internal server error occurred";
		 return new ResponseEntity<>(errorMessage, HttpStatus.INTERNAL_SERVER_ERROR); // 500 Internal Server Error
		
	}
	
	// Cron job will call this api service every 10 minutes to prevent Render from causing the Email Service to sleep.
	@GetMapping("/preventsleep")
	public ResponseEntity<String> preventEmailServiceSleeping () {
		return ResponseEntity.ok("OK");
	}
	
}