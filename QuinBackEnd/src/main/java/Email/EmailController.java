package Email;

import java.util.HashMap;
import java.util.Map;

import javax.mail.MessagingException;

import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.VelocityEngine;
import org.apache.velocity.spring.VelocityEngineUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import Model.Person;
@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class EmailController {
    @Autowired
    EmailService emailService;
	
	@PostMapping("/booktrial")
	public ResponseEntity<Person> receiveUserDetails(@RequestBody Person person) throws MessagingException{
		
//		System.out.println(person.getFirstName());
		if(person!=null) {
//			EmailService emailService = new EmailService();
//			VelocityEngine velocityEngine = new VelocityEngine();
//			velocityEngine.init();
//			VelocityContext context = new VelocityContext();
//			 Map model = new HashMap<>();
//             model.put("firstname", person.getFirstName());
//			String text =VelocityEngineUtils.mergeTemplateIntoString(velocityEngine
//                    , "src/main/resources/registration-confirmation.vm",model);
			emailService.sendEmail(person);
		}
		return null;
		
	}
}