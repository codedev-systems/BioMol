$("document").ready(()=>{
	$('#DNA').keyup(function(event){
		$('#DNA').val($(this).val().toUpperCase())	
		transcription($('#DNA').val())	
		traduction($('#RNA').val())
	})

	$('#RNA').keydown(function(event){
		event.preventDefault()
	})

	$('#protein').keydown(function(event){
		event.preventDefault()
	})
})

function transcription(dna){
	$("#RNA").val(dna.replace(/A/g, "U").replace(/T/g, "A").replace(/G/g, "0").replace(/C/g, "G").replace(/0/g, "C"))	
}

function traduction(rna){
	if(rna.length >= 3){
		let protein = "";
		let cont = 0
		while(cont <= rna.length-3){
			let codon = rna.substr(cont, 3)
			if(codon == "AUG"){
				protein = protein + "M"
			}else if(codon == "UAA" || codon == "UAG" || codon == "UGA"){
				protein = protein + "-"
			}else if(codon == "UUU" || codon == "UUC"){
				protein = protein + "F"
			}else if(codon == "UUA" || codon == "UUG" || codon == "CUU" || codon == "CUC" || codon == "CUA" || codon == "CUG"){
				protein = protein + "L"
			}else if(codon == "AUU" || codon == "AUC" || codon == "AUA"){
				protein = protein + "I"
			}else if(codon == "GUU" || codon == "GUC" || codon == "GUA" || codon == "GUG"){
				protein = protein + "V"
			}else if(codon == "UCU" || codon == "UCC" || codon == "UCA" || codon == "UCG"){
				protein = protein + "S"
			}else if(codon == "CCU" || codon == "CCC" || codon == "CCA" || codon == "CCG"){
				protein = protein + "P"
			}else if(codon == "ACU" || codon == "ACC" || codon == "ACA" || codon == "ACG"){
				protein = protein + "T"
			}else if(codon == "GCU" || codon == "GCC" || codon == "GCA" || codon == "GCG"){
				protein = protein + "A"
			}else if(codon == "UAU" || codon == "UAC"){
				protein = protein + "Y"
			}else if(codon == "CAU" || codon == "CAC"){
				protein = protein + "H"
			}else if(codon == "CAA" || codon == "CAG"){
				protein = protein + "Q"
			}else if(codon == "AAU" || codon == "AAC"){
				protein = protein + "N"
			}else if(codon == "AAA" || codon == "AAG"){
				protein = protein + "K"
			}else if(codon == "GAU" || codon == "GAC"){
				protein = protein + "D"
			}else if(codon == "GAA" || codon == "GAG"){
				protein = protein + "E"
			}else if(codon == "UGU" || codon == "UGC"){
				protein = protein + "C"
			}else if(codon == "UGC"){
				protein = protein + "W"
			}else if(codon == "CGU" || codon == "CGC" || codon == "CGA" || codon == "CGG" || codon == "AGA" || codon == "AGG"){
				protein = protein + "R"
			}else if(codon == "AGU" || codon == "AGC"){
				protein = protein + "S"
			}else if(codon == "GGU" || codon == "GGC" || codon == "GGA" || codon == "GGG"){
				protein = protein + "G"
			}else{
				protein = protein + "{CODON-INEXISTENTE}"
			}

			cont = cont + 3
		}	

		$('#protein').val(protein)
	}
	
}