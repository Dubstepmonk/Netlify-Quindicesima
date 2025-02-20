package Email;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.VelocityEngine;
import org.apache.velocity.spring.VelocityEngineUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.stereotype.Service;

import Model.Person;

@Service
public class EmailService {
	@Autowired
    private JavaMailSender mailSender;
//    private VelocityEngine velocityEngine;
//
//    public void setMailSender(JavaMailSender mailSender) {
//        this.mailSender = mailSender;
//    }
//
//    public void setVelocityEngine(VelocityEngine velocityEngine) {
//        this.velocityEngine = velocityEngine;
//    }
    
	public void sendEmail(Person person) {
		// Create a LocalDateTime object (current date and time)
		System.out.println("nimama" + person.getTrialTime());
        LocalDateTime localDateTime = LocalDateTime.now();
        // Define a formatter pattern (you can customize this pattern)
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
        
		VelocityEngine velocityEngine = new VelocityEngine();
		velocityEngine.setProperty("resource.loader", "classpath");
		velocityEngine.setProperty("classpath.resource.loader.class", "org.apache.velocity.runtime.resource.loader.ClasspathResourceLoader");
		velocityEngine.init();
		VelocityContext context = new VelocityContext();
		
		MimeMessagePreparator preparator = new MimeMessagePreparator() {
			@Override
			public void prepare(MimeMessage mimeMessage) throws Exception {
				MimeMessageHelper message = new MimeMessageHelper(mimeMessage);
				message.setTo(person.getEmail());
				message.setSubject("Registration Received");
				message.setFrom("jianzhong.heng@gmail.com"); // could be parameterized... sender should be Quindicesima email
				Map model = new HashMap();
				String upperCaseFirstName= person.getFirstName().toUpperCase();
				String modifiedString = upperCaseFirstName.replace("", " ").trim() + "!";
				model.put("firstname", modifiedString);
				//Initially is this resource path for local host
				//String text = VelocityEngineUtils.mergeTemplateIntoString(velocityEngine,
				//"src/main/resources/registration-confirmation.vm", model);
				
				//Testing this resource path for hosting on Render
				String text = VelocityEngineUtils.mergeTemplateIntoString(velocityEngine,
				        "templates/registration-confirmation.vm", model);
				message.setText(text, true);
			}

		};
		 this.mailSender.send(preparator);
		 System.out.println("Email successfully sent.");
		 
		 
		 //2nd email from quindicesima email to Quindicesima email detailing the User particulars
		 MimeMessagePreparator preparator2 = new MimeMessagePreparator() {
				@Override
				public void prepare(MimeMessage mimeMessage) throws Exception {
					MimeMessageHelper message = new MimeMessageHelper(mimeMessage);
					message.setTo("jianzhong.heng@gmail.com"); //Quindicesima email so it receives the user details
					message.setSubject("Booking Trial User Detail");
					message.setFrom("dubstepmonk97@gmail.com"); //Should be Quindicesima 2nd email
					Map model = new HashMap();
					String upperCaseFirstName= person.getFirstName().toUpperCase();
					String modifiedString = upperCaseFirstName.replace("", " ").trim() + "!";
					model.put("firstname", modifiedString);
					String text = "Name: " + person.getFirstName() +" "+ person.getLastName()  + " Contact No: " + person.getContactNumber() + " Email: " + person.getEmail() + " Requested Trial Class Time : " +person.getTrialTime();
					message.setText(text, true);
				}

			};
		 this.mailSender.send(preparator2);
		 
		 
	}
}
