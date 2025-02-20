package Model;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Person {
	private String firstName;
	private String lastName;
	private String contactNumber;
	private String email;
	@JsonProperty("trialtime")    //Explicitly make sure the Person.trialtime matches the JSON property, for some reason I need to explictly do it, without this my backend sees this as null
	private String trialtime;
	
	Person(){
		super();
	}

	public Person(String firstName, String lastName, String contactNumber, String email, String trialtime) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.contactNumber = contactNumber;
		this.email = email;
		this.trialtime = trialtime;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getTrialTime() {
		return trialtime;
	}
	
	public void setTrialTime(String trialtime) {
		this.trialtime=trialtime;
	}
	
}
